import { FaissStore } from "langchain/vectorstores/faiss";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
dotenv.config()
import * as dotenv from 'dotenv'


// Save the vector store to a directory
const directory = "C:\\Users\\samue\\OneDrive\\Desktop\\AI-App\\customeai-app\\10.1.1.83.5248.pdf";

// Load the vector store from the same directory
const loadedVectorStore = await FaissStore.load(
  directory,
  new OpenAIEmbeddings()
);

// vectorStore and loadedVectorStore are identical
const result = await loadedVectorStore.similaritySearch("minds", 1);
console.log(result);