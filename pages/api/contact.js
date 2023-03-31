import {MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const {email, name, message} = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({message: 'Invalid input.'})
            return;
        }

        //Store it in a database

        const newMessage = {
            email, name, message
        }

        let client;
        try {
            client = await MongoClient.connect('mongodb+srv://maximilian:aHdO9k9QH5bZ5HWm@cluster0.l3f542d.mongodb.net/my-site?retryWrites=true&w=majority')
        } catch (error) {
            res.status(500).json({message: 'Could not connect to database.'})
        }

        const db = client.db()
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId
        }catch (e) {
            await client.close();
            res.status(500).json({message: 'Storing message failed!'})
            return;
        }

        await client.close();
        res.status(201).json({message: 'Successfully stored message!', data: newMessage})

    }

}

export default handler;