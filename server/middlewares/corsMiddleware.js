import cors from "cors";

const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: true,
};

export default cors(corsOptions);
