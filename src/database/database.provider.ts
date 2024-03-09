import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect('mongodb+srv://adminploy:Abcd1234@cluster0.mofuwu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test'),
  },
]