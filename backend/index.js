import express from 'express';
import uniqid from 'uniqid';
import fs from 'fs';
import cors from 'cors';
import { GPTScript, RunEventType } from "@gptscript-ai/gptscript";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());

// Initialize GPTScript with API key from environment variable
const g = new GPTScript({
    openaiApiKey: process.env.OPENAI_API_KEY
});

app.get('/create-story', async (req, res) => {
    const url = decodeURIComponent(req.query.url);
    const dir = uniqid();
    const path = './stories/' + dir;
    fs.mkdirSync(path, { recursive: true });

    const opts = {
        input: `--url ${url} --dir ${path}`,
        disableCache: true,
        openaiApiKey: process.env.OPENAI_API_KEY // Explicitly pass API key
    };

    try {
        const run = await g.run('./story.gpt', opts);

        run.on(RunEventType.Event, ev => {
            if (ev.type === RunEventType.CallFinish && ev.output) {
                console.log(ev.output);
            }
        });

        const result = await run.text();
        return res.json(result);
    } catch (e) {
        console.error('Error during GPTScript run:', e);
        return res.json('error');
    }
});

app.listen(8080, () => console.log('Listening on port 8080'));
