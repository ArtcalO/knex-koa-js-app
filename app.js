const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const path = require("path");
const render = require("koa-ejs");


app = new Koa();
router = new KoaRouter()

app.use(json());
//app.use(async ctx => (ctx.body={msg:"Hello World KoaJS"}));

render(app, {
	root:path.join(__dirname, 'views'),
	layout: 'layout',
	viewExt: 'html',
	cache: false,
	debug: false
})

router.get("/", async ctx => {
	await ctx.render('index', {
		title : "Hello Friday"
	})
})
router.get("/test", ctx => ctx.body="Hello router")

//Route Middleware
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>console.log("Server Started..."));