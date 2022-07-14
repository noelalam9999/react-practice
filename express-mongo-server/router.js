const Router = require ("@koa/router");
const {model , Schema} = require('mongoose')
const router = Router()


//Schema & Model
const topicSchema = new Schema({
    title:{
      type: String,
    },
    published_at: {
      type: Date,
      default: Date.now()
    },
    score:{
        type: Number,
        default: 0
      }
  });
  
  const Topic = model('post', topicSchema);


//Controllers are inside the function.  
//Couldnt follow the MVC structure because of lack of time :(

router.get('/topics', async (ctx) => {
    try{
        const  topics = await Topic.find();
    
        ctx.body = topics;
    
    }catch(e){
    
      ctx.body= e.message;
    }
  
  })

router.post('/topics', async (ctx) => {
    const data = ctx.request.body;

    try{
        const topic = await Topic.create(data);
        ctx.body = topic;
    }
    catch(e)
    {
       ctx.body= e.message;
    }
})

router.put('/topics/:id', async (ctx) => {
  const id = ctx.params.id;
  const {title, score} = ctx.request.body;
  try{
    const post = await Topic.findById(id);
    post.title= title;
    post.score = score;
    await post.save()
    ctx.body=  post;
  }catch(e){
    ctx.status=500;
    ctx.body=e.message
  }
})




module.exports = router