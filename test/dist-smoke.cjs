const assert = require("node:assert/strict");
const pulumi = require("@pulumi/pulumi");
const certmanager = require("../dist/index.js");

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

async function main() {
  const certificate = new certmanager.certmanager.v1.Certificate("tls", {
    metadata: { name: "tls" },
    spec: {
      dnsNames: ["example.com"],
      issuerRef: {
        kind: "ClusterIssuer",
        name: "letsencrypt",
      },
      secretName: "example-tls",
    },
  });

  assert.equal(certmanager.certmanager.v1.Certificate.isInstance(certificate), true);
  assert.equal(await certificate.apiVersion.promise(), "cert-manager.io/v1");
  assert.equal(await certificate.kind.promise(), "Certificate");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
