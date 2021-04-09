import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.*;

import org.bson.Document;
import java.util.Arrays;
import java.util.Date;

public class Principal {

    public static void main(String[] args) {

        MongoClient cliente = new MongoClient();
        MongoDatabase bancoDeDados = cliente.getDatabase("test");
        MongoCollection<Document> alunos = bancoDeDados.getCollection("alunos");
        Document aluno = alunos.find().first();

        //Insert
        Document novoAluno = new Document("nome", "Joao")
                .append("data_nascimento", new Date(2003, 10,10))
                .append("curso", new Document("nome","Historia"))
                .append("notas", Arrays.asList(10,9,8))
                .append("habilidades", Arrays.asList(new Document()
                        .append("nome", "Ingles")
                        .append("nivel", "Básico"),
                        new Document().append("nome", "Espanhol")
                                       .append("nível", "Básico")));

        alunos.insertOne(novoAluno);

        //Update
        //primeiro argumento o filtro e depois atualização (set) para o desejado.
        alunos.updateOne(Filters.eq("nome", "Joao"),
                new Document("$set", new Document("nome", "Joao Silva")));

        //Delete
        alunos.deleteOne(Filters.eq("nome","Joao Silva"));

        cliente.close();

    }

}
