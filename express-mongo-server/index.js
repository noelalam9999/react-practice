const Koa = require ("Koa");
const bodyParser = require ("koa-bodyparser");
const router = require ("./router");
const mongoose = require ('mongoose')
const url = `mongodb+srv://voting:1234@cluster0.oaq3u.mongodb.net/?retryWrites=true&w=majority`
const app = new Koa();
let cors = require('koa-cors2')
app.use(cors());

(async function () {
    try{
        
        app.use(bodyParser()) 
        app.use(router.routes())
        app.use( async(ctx,next)=>{
            if(ctx.status==404){
                ctx.status = 404
                ctx.body = `<!doctype html><html lang="en"><meta charset="utf-8"><title>apiary.io—404—No Resource Found!</title><body><div id="bg"></div><div id="message"><h1>The resource you're looking for doesn't exist. <br>Please check the <a href="https://codemocracy.docs.apiary.io/">API documentation</a> or have a look on available resources below.</h1><p></p><ol><section><h2></h2><li><b>GET</b> /topics</li><li><b>POST</b> /topics</li><li><b>DELETE</b> /topics/{id}</li><li><b>PUT</b> /topics/{id}/up</li><li><b>PUT</b> /topics/{id}/down</li></section></ol></div></body></html>`
            }
        })
      
        app.listen(3030,()=>{
            mongoose
            .connect(url)
            .then(() => console.log('Mongo DB Connection Successfull!'))
            .catch((err) => {
              console.log(err)
            })
            console.log("server running at 3030")
        })
    }
    catch(e){
        console.log(e)
    }
}
)();