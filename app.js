"use strict";
var TOOLS = [
  {name:"ChatGPT",category:"Chatbots & Assistants",one:"OpenAI's flagship conversational assistant.",desc:"A versatile chatbot for drafting, brainstorming, coding help, and everyday questions. Its large plug-in and memory ecosystem makes it a solid default if you only pick one assistant.",pricing:"Freemium",url:"https://chatgpt.com"},
  {name:"Claude",category:"Chatbots & Assistants",one:"Anthropic's assistant, strong on long documents.",desc:"Claude handles very long texts gracefully and tends to produce careful, well-structured writing. It is a favourite for analysing reports, contracts, and manuscripts without losing the thread.",pricing:"Freemium",url:"https://claude.ai"},
  {name:"Gemini",category:"Chatbots & Assistants",one:"Google's assistant, woven into Google services.",desc:"Gemini shines if you live in Gmail, Docs, and Search, pulling live information and workspace context into its answers. Its multimodal skills handle images and video as comfortably as text.",pricing:"Freemium",url:"https://gemini.google.com"},
  {name:"Perplexity",category:"Chatbots & Assistants",one:"An answer engine that cites its sources.",desc:"Perplexity searches the web for every answer and shows where each claim came from, so you can verify instead of trusting blindly. Ideal for research, news, and quick fact-finding.",pricing:"Freemium",url:"https://www.perplexity.ai"},
  {name:"Midjourney",category:"Image",one:"The benchmark for artistic AI image generation.",desc:"Midjourney produces strikingly polished, stylised images from text prompts and is beloved by illustrators and concept artists. It runs through a web editor and Discord, with deep controls for style and composition.",pricing:"Paid",url:"https://www.midjourney.com"},
  {name:"DALL·E",category:"Image",one:"OpenAI's image generator, built into ChatGPT.",desc:"DALL·E turns plain-language descriptions into images and edits, and understands instructions unusually literally. Because it lives inside ChatGPT, it is the easiest generator for beginners to reach.",pricing:"Freemium",url:"https://openai.com/dall-e-3"},
  {name:"Ideogram",category:"Image",one:"Image generation that actually spells words correctly.",desc:"Most generators garble text inside images; Ideogram is known for crisp, legible lettering, making it great for posters, logos, and social graphics. Its prompt adherence is strong even on busy scenes.",pricing:"Freemium",url:"https://ideogram.ai"},
  {name:"Leonardo",category:"Image",one:"A full creative suite for game and design assets.",desc:"Leonardo goes beyond one-off images with fine-tuned models for game assets, textures, and marketing visuals, plus canvas editing tools. Generous free credits make it easy to experiment first.",pricing:"Freemium",url:"https://leonardo.ai"},
  {name:"Recraft",category:"Image",one:"Design-grade images, icons, and vector graphics.",desc:"Recraft targets working designers: it generates editable vector art, icon sets, and brand-consistent illustrations, not just raster pictures. Precise placement and style controls set it apart from casual generators.",pricing:"Freemium",url:"https://www.recraft.ai"},
  {name:"Runway",category:"Video",one:"Professional AI video generation and editing.",desc:"Runway's Gen models turn text or images into short cinematic clips, and its editor adds background removal, motion tracking, and inpainting. It is the tool most film and ad teams reach for first.",pricing:"Freemium",url:"https://runwayml.com"},
  {name:"Pika",category:"Video",one:"Playful text-to-video with fun effects.",desc:"Pika makes short, shareable video clips from prompts and still images, with signature effects that squash, melt, or explode subjects. It is quick, forgiving, and made for social content.",pricing:"Freemium",url:"https://pika.art"},
  {name:"ElevenLabs",category:"Audio & Voice",one:"The most realistic AI voice generation.",desc:"ElevenLabs clones and synthesises speech that is hard to tell from a recording, in dozens of languages. Creators use it for narration, audiobooks, and dubbing; developers use its simple API.",pricing:"Freemium",url:"https://elevenlabs.io"},
  {name:"Suno",category:"Audio & Voice",one:"Complete songs from a single text prompt.",desc:"Describe a style and theme and Suno writes, composes, and sings an original track in under a minute. It is remarkably good fun and increasingly used for demos and jingles.",pricing:"Freemium",url:"https://suno.com"},
  {name:"Udio",category:"Audio & Voice",one:"Music generation with strong vocals and structure.",desc:"Udio builds full songs with verses and choruses that hold together, and lets you extend and remix sections you like. Musicians use it to sketch ideas they later record properly.",pricing:"Freemium",url:"https://www.udio.com"},
  {name:"Descript",category:"Audio & Voice",one:"Edit audio and video by editing the transcript.",desc:"Descript transcribes your recording, then lets you cut and rearrange it by deleting words in the text. Its AI cleanup removes filler words and studio-ises rough audio in one click.",pricing:"Freemium",url:"https://www.descript.com"},
  {name:"Otter",category:"Audio & Voice",one:"Automatic meeting notes and searchable transcripts.",desc:"Otter joins your calls, records who said what, and produces summaries with action items. Teams use it so nobody has to take minutes and every decision stays searchable.",pricing:"Freemium",url:"https://otter.ai"},
  {name:"Cursor",category:"Coding",one:"An AI-first code editor built on VS Code.",desc:"Cursor knows your whole codebase, so it can write multi-file changes, answer questions about your project, and fix errors in context. Most developers feel at home within an hour.",pricing:"Freemium",url:"https://www.cursor.com"},
  {name:"GitHub Copilot",category:"Coding",one:"AI pair programming inside your existing editor.",desc:"Copilot autocompletes code, drafts tests, and explains unfamiliar code without leaving VS Code, JetBrains, or the terminal. It is the most widely adopted coding assistant in professional teams.",pricing:"Paid",url:"https://github.com/features/copilot"},
  {name:"Notion AI",category:"Writing & Productivity",one:"AI writing and search inside your Notion workspace.",desc:"Notion AI summarises pages, drafts documents, and answers questions across everything your team has written in Notion. If your notes already live there, it removes a lot of copy-paste.",pricing:"Paid",url:"https://www.notion.com/product/ai"},
  {name:"Grammarly",category:"Writing & Productivity",one:"Writing polish for grammar, tone, and clarity.",desc:"Grammarly checks spelling and grammar everywhere you type, then goes further with tone and clarity suggestions. Its generative features can redraft a paragraph to sound sharper or friendlier.",pricing:"Freemium",url:"https://www.grammarly.com"},
  {name:"Jasper",category:"Writing & Productivity",one:"Marketing copy written in your brand voice.",desc:"Jasper is built for marketing teams: campaigns, ads, and blog posts generated in a consistent brand voice, with workflows for approval and reuse. It is pricier, but aimed at businesses, not hobbyists.",pricing:"Paid",url:"https://www.jasper.ai"},
  {name:"Canva",category:"Writing & Productivity",one:"Design for non-designers, now with AI built in.",desc:"Canva's Magic Studio generates images, rewrites copy, resizes designs for every platform, and removes backgrounds, all inside its drag-and-drop editor. It remains the fastest route from idea to finished graphic.",pricing:"Freemium",url:"https://www.canva.com"},
  {name:"Gamma",category:"Writing & Productivity",one:"Presentations and documents generated from an outline.",desc:"Give Gamma a topic or outline and it builds a polished, web-native deck with layout and imagery done for you. It is a genuine shortcut past the blank-slide problem.",pricing:"Freemium",url:"https://gamma.app"},
  {name:"Napkin AI",category:"Writing & Productivity",one:"Turns your text into diagrams and visuals.",desc:"Napkin AI reads a paragraph and proposes charts, diagrams, and infographics that explain it, which you can restyle and export. It is a quiet superpower for reports, lessons, and posts.",pricing:"Freemium",url:"https://www.napkin.ai"}
];
var CATEGORIES = ["All","Chatbots & Assistants","Image","Video","Audio & Voice","Coding","Writing & Productivity"];
var state = {category:"All",query:""};
function filterTools(tools,category,query){
  var q = (query||"").trim().toLowerCase();
  return tools.filter(function(t){
    var inCat = !category || category==="All" || t.category===category;
    if(!inCat) return false;
    if(!q) return true;
    var hay = (t.name+" "+t.category+" "+t.one+" "+t.desc+" "+t.pricing).toLowerCase();
    return hay.indexOf(q) !== -1;
  });
}
function tagClass(pricing){ return pricing==="Paid" ? "tag paid" : (pricing==="Free" ? "tag free" : "tag"); }
function render(){
  var grid = document.getElementById("grid");
  var count = document.getElementById("count");
  if(!grid) return;
  var list = filterTools(TOOLS, state.category, state.query);
  if(count) count.textContent = list.length + (list.length===1 ? " tool" : " tools") + " shown";
  if(list.length===0){ grid.innerHTML = '<p class="empty">No tools match that search. Try a different word or category.</p>'; return; }
  grid.innerHTML = list.map(function(t){
    return '<article class="card"><span class="cat">'+t.category+'</span><h3>'+t.name+'</h3><p class="one">'+t.one+'</p><p class="desc">'+t.desc+'</p><div class="row"><span class="'+tagClass(t.pricing)+'">'+t.pricing+'</span><a class="visit" href="'+t.url+'" target="_blank" rel="noopener">Visit site &rarr;</a></div></article>';
  }).join("");
}
function renderFilters(){
  var box = document.getElementById("filters");
  if(!box) return;
  box.innerHTML = CATEGORIES.map(function(c){
    return '<button type="button" data-cat="'+c+'" class="'+(c===state.category?"active":"")+'">'+c+'</button>';
  }).join("");
  var btns = box.querySelectorAll("button");
  for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(ev){
      state.category = ev.currentTarget.getAttribute("data-cat");
      renderFilters(); render();
    });
  }
}
function init(){
  renderFilters(); render();
  var input = document.getElementById("search");
  if(input){ input.addEventListener("input",function(ev){ state.query = ev.target.value; render(); }); }
}
if(typeof document !== "undefined" && document.addEventListener){ document.addEventListener("DOMContentLoaded",init); }
if(typeof module !== "undefined" && module.exports){ module.exports = {TOOLS:TOOLS,CATEGORIES:CATEGORIES,filterTools:filterTools,tagClass:tagClass}; }
