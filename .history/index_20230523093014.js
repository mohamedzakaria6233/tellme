/* eslint-disable */
const OpenAI=require('openai')
const { Configuration, OpenAIApi } =OpenAI;

/////////////////////////////////
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=3200 || process.env.PORT;

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
        model: "gpt-3.5-turbo",
        messages:[{role:"user",content:message}],

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

