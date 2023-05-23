/* eslint-disable */
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