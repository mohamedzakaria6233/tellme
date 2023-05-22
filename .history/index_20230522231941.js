/* eslint-disable */
const OpenAI=require('openai')
const { Configuration, OpenAIApi } =OpenAI;

/////////////////////////////////
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=3010 || process.env.PORT;

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

