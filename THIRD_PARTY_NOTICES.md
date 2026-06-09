# Third Party Notices

This package includes Kubernetes CustomResourceDefinition YAML copied from
cert-manager and TypeScript bindings generated from those CRDs with
`crd2pulumi`.

Upstream project: https://github.com/cert-manager/cert-manager
Upstream version: `v1.20.2`
Upstream license: Apache-2.0
License text: `THIRD_PARTY_LICENSES/APACHE-2.0.txt`

Bundled source file:

- `https://github.com/cert-manager/cert-manager/releases/download/v1.20.2/cert-manager.crds.yaml`

Changes made in this package:

- CRD YAML is copied into `crds/` with generated source/version headers.
- TypeScript Pulumi resources are generated from the CRD schemas.
- Generated TypeScript is normalized for provider tokens and trailing whitespace.

No upstream root `NOTICE` file was present in the pinned source tree when this
package was prepared.
