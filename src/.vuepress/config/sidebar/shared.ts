import fs from 'fs'
import path from 'path'
import { SidebarConfigArray, SidebarItem4Shortcut } from 'vuepress/config'

// const officialPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../../../articles/developer'))
//   .map(filename => 'developer/' + filename.slice(0, -3))
//   .sort()

function getDirArticles(relativePath: string, prefix: string): Array<SidebarItem4Shortcut> {
  return fs
  .readdirSync(path.resolve(__dirname, relativePath))
  .map(filename => prefix + '/' + filename.slice(0, -3))
  .sort()
}

export function getArticlesSidebar(): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: "About Clipboard Manager",
      collapsable: false,
      children: getDirArticles('../../../articles/clipboardmanager', "clipboardmanager")
    },
    {
      title: "Developer Blog",
      collapsable: false,
      children: getDirArticles('../../../articles/developer', "developer")
    }
  ]
  return sidebar
}
  