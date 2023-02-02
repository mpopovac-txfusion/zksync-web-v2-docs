export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameOnMobile\":true,\"sidebar\":{\"/dev\":[{\"text\":\"Introduction\",\"link\":\"/dev/\"},{\"text\":\"Getting started\",\"link\":\"/dev/fundamentals\",\"children\":[\"/dev/fundamentals/rollups.md\",\"/dev/fundamentals/zkSync.md\",\"/dev/fundamentals/testnet.md\",\"/dev/fundamentals/faq.md\"]},{\"text\":\"Understanding zkSync\",\"link\":\"/dev/developer-guides\",\"children\":[\"/dev/developer-guides/transactions/transactions.md\",\"/dev/developer-guides/transactions/blocks.md\",\"/dev/developer-guides/contracts/system-contracts.md\",\"/dev/developer-guides/aa.md\",\"/dev/developer-guides/security.md\",\"/dev/developer-guides/transactions/fee-model.md\",\"/dev/developer-guides/bridging/bridging-asset.md\",\"/dev/developer-guides/bridging/l1-l2-interop.md\",\"/dev/developer-guides/bridging/l1-l2.md\",\"/dev/developer-guides/bridging/l2-l1.md\"]},{\"text\":\"Building on zkSync\",\"link\":\"/dev/developer-guides/building-on-zksync\",\"children\":[\"/dev/developer-guides/hello-world.md\",\"/dev/developer-guides/contracts/contracts.md\",\"/dev/developer-guides/contracts/contract-verification.md\",\"/dev/developer-guides/building-on-zksync/events.md\",\"/dev/developer-guides/building-on-zksync/rpc.md\",\"/dev/developer-guides/building-on-zksync/videos.md\"]},{\"text\":\"Tutorials\",\"link\":\"/dev/tutorials\",\"children\":[\"/dev/tutorials/cross-chain-tutorial.md\",\"/dev/tutorials/custom-aa-tutorial.md\",\"/dev/tutorials/custom-paymaster-tutorial.md\"]},{\"text\":\"Troubleshooting\",\"link\":\"/dev/troubleshooting\",\"children\":[\"/dev/troubleshooting/important-links.md\",\"/dev/troubleshooting/status.md\",\"/dev/troubleshooting/docs-contribution/docs.md\",\"/dev/troubleshooting/docs-contribution/community-resources.md\",\"/dev/troubleshooting/known-issues.md\"]}],\"/api\":[{\"text\":\"Overview\",\"link\":\"/api/\"},{\"text\":\"Web3 API\",\"link\":\"/api/api.md\"},{\"text\":\"JavaScript SDK\",\"link\":\"/api/js\",\"children\":[\"/api/js/getting-started\",\"/api/js/providers\",\"/api/js/accounts\",\"/api/js/accounts-l1-l2\",\"/api/js/contracts\",\"/api/js/features\",\"/api/js/utils\",\"/api/js/types\",\"/api/js/front-end\"]},{\"text\":\"Python SDK\",\"link\":\"/api/python/\",\"children\":[\"/api/python/getting-started\"]},{\"text\":\"Java SDK\",\"link\":\"/api/java/getting-started\",\"children\":[\"/api/java/getting-started\"]},{\"text\":\"GO SDK\",\"link\":\"/api/go/getting-started\",\"children\":[\"/api/go/getting-started\"]},{\"text\":\"Hardhat\",\"link\":\"/api/hardhat\",\"children\":[\"/api/hardhat/getting-started\",\"/api/hardhat/plugins\",\"/api/hardhat/testing\",\"/api/hardhat/compiling-libraries\"]},{\"text\":\"Block Explorer\",\"link\":\"/api/tools/block-explorer\",\"children\":[\"/api/tools/block-explorer/intro\",\"/api/tools/block-explorer/block-view\",\"/api/tools/block-explorer/contract-verification\"]},{\"text\":\"zkSync CLI\",\"link\":\"/api/tools/zksync-cli/\"}],\"/legal/\":[\"/legal/terms\",\"/legal/privacy\"],\"/contact/\":[\"/contact/\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Matterlabs\",\"url\":\"https://github.com/matter-labs/zksync-web-v2-docs\"},\"logo\":\"/logo.svg\",\"repo\":\"matter-labs/zksync-web-v2-docs\",\"docsDir\":\"src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[\"/\",{\"text\":\"Quickstart\",\"link\":\"/dev/developer-guides/hello-world.html\"},{\"text\":\"Developer Docs\",\"link\":\"/dev/\"},{\"text\":\"Tools/SDKs\",\"link\":\"/api/\"},{\"text\":\"Contact\",\"link\":\"/contact.html\"},{\"text\":\"v2.0\",\"children\":[{\"text\":\"v2.0\",\"icon\":\"play\",\"link\":\"/dev/\"},{\"text\":\"v1.x\",\"icon\":\"play\",\"link\":\"https://docs.zksync.io\"}]}],\"footer\":\"Made with ❤️ by Matterlabs\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
