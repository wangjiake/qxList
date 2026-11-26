/*
 * 88小说网(m.88xiaoshuo.net) 去广告 / 防跳黄站 —— Quantumult X script-response-body
 * 更新日期：2026-11-26
 * 做法(白名单)：删掉页面里所有内嵌 <script>，只保留带 src 的站点脚本(/tpl/m/js/common.js)。
 * 广告全是内嵌脚本(只在手机上运行)：
 *  ① 域名每 6 小时换的广告：滑到章节末尾跳黄站(ystx5333.cc → yinse.yesedns.com)
 *  ② 点屏幕下方(下一页按钮区)就跳(4gl3gqz.com)
 *  ③ 伪装成 .js 的广告图浮层，手指按到就跳；外加每天一次随机自动跳(yuyu13.com)
 * 章节正文、翻页链接、目录下拉框都不靠内嵌脚本，删了不影响阅读。
 */
let body = $response.body;
if (body && /<\/script>/i.test(body)) {
  body = body.replace(/<script(?![^>]*\ssrc=)[^>]*>[\s\S]*?<\/script>/gi, "");
  // 广告位占位(showsign 用的空 span)，顺手去掉
  body = body.replace(/<span id="mysign"><\/span>/g, "");
}
$done({ body });
