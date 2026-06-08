import * as pulumi from "@pulumi/pulumi";
import { Certificate } from "../cert_manager/v1/certificate";
import { describe, expect, it } from "vitest";

pulumi.runtime.setMocks(
  {
    call: (args) => args.inputs,
    newResource: (args) => ({
      id: `${args.name}_id`,
      state: args.inputs,
    }),
  },
  "project",
  "stack",
  false,
);

describe("generated cert-manager CRD resources", () => {
  it("constructs a typed Certificate with generated API defaults", async () => {
    const certificate = new Certificate("tls", {
      metadata: {
        name: "tls",
      },
      spec: {
        dnsNames: ["example.com"],
        issuerRef: {
          kind: "ClusterIssuer",
          name: "letsencrypt",
        },
        secretName: "example-tls",
      },
    });

    expect(Certificate.isInstance(certificate)).toBe(true);
    expect(Certificate.__pulumiType).toBe(
      "kubernetes:cert-manager.io/v1:Certificate",
    );
    await expect(outputValue(certificate.apiVersion)).resolves.toBe("cert-manager.io/v1");
    await expect(outputValue(certificate.kind)).resolves.toBe("Certificate");
    await expect(outputValue(certificate.metadata)).resolves.toMatchObject({
      name: "tls",
    });
  });
});

async function outputValue<T>(output: pulumi.Output<T>): Promise<T> {
  return (output as unknown as { promise: () => Promise<T> }).promise();
}
