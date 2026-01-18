

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/summarize", async (req, res) => {
  try {
    const { url } = req.body;

    // 1. Fetch website
    const response = await axios.get(url);
    const html = response.data;

    // 2. Extract text
    const $ = cheerio.load(html);
    let text = "";
    $("p").each((i, el) => {
      text += $(el).text();
    });

    text = text.slice(0, 3000); // limit text

    // 3. AI summary
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Summarize this webpage in 5–6 lines:\n${text}`,
        },
      ],
    });

    res.json({
      summary: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to summarize" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
