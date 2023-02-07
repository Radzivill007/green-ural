const React = require('react')

const yandexMetrika = {
  __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(77777777, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });`
}

const HeadComponents = [
  <link key="favicon" rel="icon" href="https://greenural.com/favicon.ico" type="image/png" />,
  <meta key="yandex-verification" name="yandex-verification" content="`77777777`" />
]

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
  setPreBodyComponents([
    <script key="yandexMetrika" dangerouslySetInnerHTML={yandexMetrika} />,

    <div key="yandexMetrikaWatch">
      <img src="https://mc.yandex.ru/watch/77777777" style={{ position: 'absolute', left: '-9999px' }} />
    </div>
  ])
}
