# cert-manager-pulumi

Pulumi TypeScript bindings for cert-manager CRDs generated with `crd2pulumi`.

This package is generated from a pinned cert-manager release CRD bundle. It is
useful for typed Pulumi resources such as `Certificate`, `Issuer`,
`ClusterIssuer`, `CertificateRequest`, and ACME challenge/order resources.

## Install

```sh
npm install cert-manager-pulumi @pulumi/kubernetes @pulumi/pulumi
```

## Example

```ts
import { cert_manager } from "cert-manager-pulumi";

new cert_manager.v1.ClusterIssuer("selfsigned", {
  metadata: {
    name: "selfsigned",
  },
  spec: {
    selfSigned: {},
  },
});
```

## Generate

```sh
pnpm generate:crds
```

The CRDs currently come from cert-manager `v1.20.2`.

For local regeneration, clone `masonbrothers/crd2pulumi-package-tools` as a
sibling directory:

```sh
git clone git@github.com:masonbrothers/crd2pulumi-package-tools.git ../crd2pulumi-package-tools
```

## Publish

GitHub Actions runs install, CRD regeneration, typecheck, and build. Publishing
runs from GitHub Releases with npm provenance and requires an `NPM_TOKEN`
repository secret.
