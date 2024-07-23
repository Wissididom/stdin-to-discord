import "dotenv/config";

async function getStdin() {
  let input = "";
  for await (const chunk of process.stdin) {
    input += chunk;
  }
  return input;
}

await fetch(`${process.env.DISCORD_WEBHOOK_URL}?wait=true`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    content: await getStdin(),
  }),
});
