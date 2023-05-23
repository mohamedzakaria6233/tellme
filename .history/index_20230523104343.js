const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=process.env.PORT;
const OpenAI=require('openai')
const { Configuration, OpenAIApi } =OpenAI;
const openai=new OpenAIApi(new Configuration({
    apiKey:process.env.SECRET
}))


app.use(bodyparser.json())
app.use(cors())

app.post('/',async(req,res)=>{
    const {message}=req.body
    const response = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages:[{role:"user",content:message}]
    })
    
        if(response.data.choices[0].message.content){
            res.json({
                message:response.data.choices[0].message.content
            })
        }
      
})

app.listen(port,()=>{
    console.log("example app ")
})

