// Server
import { server } from './init/server';

// Database
import { checkDB } from './init/db';

// Endpoints
import { graphqlPath, subscriptionsPath } from './init/apolloServer';

// Config
import { PORT } from './init/config';
import dotenv from 'dotenv';

dotenv.config();

server.listen(PORT, async () => {
  try {
    checkDB();
  } catch (error) {
    console.log(error);
  }
  console.log(`🚀 Server ready at http://localhost:${PORT}${graphqlPath}`);
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${subscriptionsPath}`,
  );
});
