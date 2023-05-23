/* eslint-disable */
const express=require('express')
import {Configuration,OpenAIApi} from 'openai'
const openai=new OpenAIApi(new Configuration({
    apiKey:"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"
}))
openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages:[{role:"user",content:"do you chat gpt 3 or 4"}]
}).then((res)=>{
    console.log(res.data.choices[0].message.content)
})


/* eslint-disable */
const OpenAI=require('openai')
const { Configuration, OpenAIApi } =OpenAI;

/////////////////////////////////
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=3030;

const configuration = new Configuration({
    // organization: "org-i16GdI3biVetsydNnhzCYRLs",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyparser.json())
app.use(cors())

app.post('/',async(req,res)=>{
    const {message}=req.body
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`${message}`,
        max_tokens: 100,
        temperature: 0,
      });
    
        if(response.data.choices[0].text){
            res.json({
                message:response.data.choices[0].text
            })
        }
      
})

app.listen(port,()=>{
    console.log("example app listening")
})

