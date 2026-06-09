export default {
  cleanEntries: [
    "acme",
    "cert_manager",
  ],
  downloadTimeoutMs: 30000,
  sources: [
    {
      name: "cert-manager",
      sha256: "6da9beb5324695037de31fea998099c1446f6ce4e809f32b13a76894f4f169f0",
      version: "v1.20.2",
      url: "https://github.com/cert-manager/cert-manager/releases/download/v1.20.2/cert-manager.crds.yaml",
    },
  ],
};
