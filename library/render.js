const temp = () => (
  `
  <script type="text/javascript">
    (
      function(
        c, // window
        l, // document
        a, // clarity
        r, // script
        i, // 96km7rtanm
        t, // undefined
        y,
      ){
          if (c[a]) {
            c[a] = c[a]
          } else {
            c[a] = function() { (c[a].q = c[a].q || []).push(arguments) }
          }
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        // y=l.getElementsByTagName(r)[0]; // 当前函数
        // y.parentNode.insertBefore(t,y); // y 前面添加 t
      }
    )(window, document, "clarity", "script", "9a1ogyrdyu");
  </script>
  
  <script>
  // https://www.clarity.ms/tag/96km7rtanm
  !
  function(
    c,
    l,
    a,
    r,
    i,
    t,
    y,
  ) {
    if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId);
    a[c].t = !0,
    (t = l.createElement(r)).async = !0,
    t.src = "https://d.clarity.ms/s/0.6.27/clarity.js",
    (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
    a[c]("start", i),
    a[c].q.unshift(a[c].q.pop())
  } (
      "clarity",
      document,
      window,
      "script",
      {
        "projectId": "9a1ogyrdyu",
        "upload": "http://172.16.16.67:9527/api/collect",
        // "upload": "https://d.clarity.ms/collect",
        "expire": 365,
        "cookies": ["_uetmsclkid", "_uetvid"],
        "track": true,
        "lean": false,
        // "fallback": "https://www.clarity.ms/eus/collect",
        "fallback": "http://172.16.16.67:9527/api/collect",
        "content": true
      },
  );
  </script>
  `
  )
  
  module.exports = async (ctx, next) => {
    ctx.body = temp()
    await next()
  }