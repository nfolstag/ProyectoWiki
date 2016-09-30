package net.unipiloto.wiki.web.transactions;

import java.util.ArrayList;
import java.util.List;
import net.unipiloto.wiki.web.entities.Evaluation;
import net.unipiloto.wiki.web.others.OntologyTools;
import org.boon.json.JsonFactory;
import org.openrdf.query.BindingSet;
import org.openrdf.query.QueryLanguage;
import org.openrdf.query.TupleQuery;
import org.openrdf.query.TupleQueryResult;
import org.openrdf.repository.Repository;
import org.openrdf.repository.RepositoryConnection;

public class EvaluationTransaction
{
    public static Evaluation selectByAlternativeId(String alternativeId, RepositoryConnection connection)
    {
        Evaluation evaluation = null;
        
        Repository repo = null;
        RepositoryConnection conn = null;
        if(connection != null)
        {
            conn = connection;
        }
        else
        {
            repo = OntologyTools.getInstance();
            repo.initialize();
            conn = repo.getConnection();
        }
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL, 
                "SELECT DISTINCT ?id ?pros ?cons ?valoration WHERE {"
                + "<http://www.semanticweb.org/sa#"+alternativeId+"> <http://www.semanticweb.org/sa#alternativeLinkTo> ?d . "
                + "?d <http://www.semanticweb.org/sa#id> ?id . "
                + "?d <http://www.semanticweb.org/sa#pros> ?pros . "
                + "?d <http://www.semanticweb.org/sa#cons> ?cons . "
                + "?d <http://www.semanticweb.org/sa#valoration> ?valoration "
                + "} "
                + "ORDER BY ?id"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                BindingSet bs = result.next();
                evaluation = new Evaluation(
                    bs.getValue("id").stringValue(), 
                    bs.getValue("pros").stringValue(), 
                    bs.getValue("cons").stringValue(), 
                    bs.getValue("valoration").stringValue()
                );
            }
           
        }
        finally
        {
            if(connection == null)
            {
                conn.close();
            }
        }
        
        return evaluation;
    }
    
    public static List<Evaluation> selectByCriteriaId(String id, RepositoryConnection connection)
    {
        List<Evaluation> evaluations = new ArrayList(0);
        Repository repo = null;
        RepositoryConnection conn = null;
        if(connection != null)
        {
            conn = connection;
        }
        else
        {
            repo = OntologyTools.getInstance();
            repo.initialize();
            conn = repo.getConnection();
        }
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL, 
                "SELECT DISTINCT ?id ?pros ?cons ?valoration WHERE {"
                + "<http://www.semanticweb.org/sa#"+id+"> <http://www.semanticweb.org/sa#criteriaLinkTo> ?d . "
                + "?d <http://www.semanticweb.org/sa#id> ?id . "
                + "?d <http://www.semanticweb.org/sa#pros> ?pros . "
                + "?d <http://www.semanticweb.org/sa#cons> ?cons . "
                + "?d <http://www.semanticweb.org/sa#valoration> ?valoration "
                + "} "
                + "ORDER BY ?id"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                BindingSet bs = result.next();
                evaluations.add(new Evaluation(
                    bs.getValue("id").stringValue(), 
                    bs.getValue("pros").stringValue(), 
                    bs.getValue("cons").stringValue(), 
                    bs.getValue("valoration").stringValue()
                ));
            }
        }
        finally
        {
            if(connection == null)
            {
                conn.close();
            }
        }
        
        return evaluations;
    }
    
    public static String selectById(String id)
    {
        Evaluation evaluation = null;
        Repository repo = OntologyTools.getInstance();
        repo.initialize();
        RepositoryConnection conn = repo.getConnection();
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL, 
                "SELECT DISTINCT ?id ?pros ?cons ?valoration WHERE {\n"
                +"<http://www.semanticweb.org/sa#"+id+"> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/sa#Evaluation> . "
                +"<http://www.semanticweb.org/sa#"+id+"> <http://www.semanticweb.org/sa#id> ?id . "
                +"<http://www.semanticweb.org/sa#"+id+"> <http://www.semanticweb.org/sa#pros> ?pros . "
                +"<http://www.semanticweb.org/sa#"+id+"> <http://www.semanticweb.org/sa#cons> ?cons . "
                +"<http://www.semanticweb.org/sa#"+id+"> <http://www.semanticweb.org/sa#valoration> ?valoration "
                + "} "
                + "ORDER BY ?id"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                BindingSet bs = result.next();
                evaluation = new Evaluation(
                    bs.getValue("id").stringValue(), 
                    bs.getValue("pros").stringValue(), 
                    bs.getValue("cons").stringValue(), 
                    bs.getValue("valoration").stringValue()
                );
            }
        }
        finally
        {
            conn.close();
        }
        
        return JsonFactory.toJson(evaluation);
    }
    
    public static String selectAll()
    {
        List<Evaluation> qas = new ArrayList<Evaluation>();
        
        Repository repo = null;
        repo = OntologyTools.getInstance();
        repo.initialize();
        
        RepositoryConnection conn = repo.getConnection();
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL, 
                "SELECT DISTINCT ?id ?pros ?cons ?valoration WHERE {"
                +"?d <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/sa#Evaluation> . "
                +"?d <http://www.semanticweb.org/sa#id> ?id . "
                +"?d <http://www.semanticweb.org/sa#pros> ?pros . "
                +"?d <http://www.semanticweb.org/sa#cons> ?cons . "
                +"?d <http://www.semanticweb.org/sa#valoration> ?valoration "
                +"} "
                +"ORDER BY ?id"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                
                BindingSet bs = result.next();
                qas.add(new Evaluation(
                    bs.getValue("id").stringValue(), 
                    bs.getValue("pros").stringValue(), 
                    bs.getValue("cons").stringValue(), 
                    bs.getValue("valoration").stringValue()
                ));
                
            }
            
            if(qas.isEmpty())
            {
                qas = null;
            }
        }
        finally
        {
            conn.close();
            
        }
        
        return JsonFactory.toJson(qas);
    }
    
}
