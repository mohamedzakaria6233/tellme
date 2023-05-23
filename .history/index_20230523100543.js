const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=3500;
const OpenAI=require('openai')
const { Configuration, OpenAIApi } =OpenAI;
const openai=new OpenAIApi(new Configuration({
    apiKey:"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"
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
    console.log("example app listening")
})

