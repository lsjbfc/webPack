
import 'static/css/common/common'
import 'static/css/page/index'
import html from 'views/index.html'
import header from 'static/js/component/header'
import cookie from 'cookie'

$util.setTitle('首页')

// const data = {
// 	list: ['item 1', 'item 2', 'item 3']
// }

const headerHtml = header()
// $.cookie.json = true;

$.cookie("token",'1212');

console.log('cookie',$.cookie('token'),html);

// const html = render(data)
$('#app').html('')
$('#app').html(headerHtml)
$('#app').append(html)


	