export default async function loadBalancer(chinaDownload, USDownload) {
  const result = await Promise.race([chinaDownload, USDownload]);
  return result;
}
