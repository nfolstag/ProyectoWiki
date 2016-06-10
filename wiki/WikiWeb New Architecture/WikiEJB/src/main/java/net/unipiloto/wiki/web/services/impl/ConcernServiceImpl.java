package net.unipiloto.wiki.web.services.impl;

import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import net.unipiloto.wiki.domain.entities.Concern;
import net.unipiloto.wiki.domain.entities.FunctionalRequeriment;
import net.unipiloto.wiki.domain.entities.QualityAttribute;
import net.unipiloto.wiki.web.others.OntologyTools;
import net.unipiloto.wiki.web.services.ConcernService;
import org.boon.json.JsonFactory;
import org.openrdf.query.BindingSet;
import org.openrdf.query.QueryLanguage;
import org.openrdf.query.TupleQuery;
import org.openrdf.query.TupleQueryResult;
import org.openrdf.repository.Repository;
import org.openrdf.repository.RepositoryConnection;

@Stateless(mappedName = "java:global/ConcernService")
public class ConcernServiceImpl
        implements ConcernService
{

    @Override
    public String selectAllConcernsByDecisionId(String id,
            RepositoryConnection connection)
    {
        List<Concern> concerns = new ArrayList();
        Repository repo = null;
        RepositoryConnection conn = null;
        if(connection != null)
        {
            conn = connection;
        }else
        {
            repo = OntologyTools.getInstance();
            repo.initialize();
            conn = repo.getConnection();
        }
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL,
                    "SELECT DISTINCT ?id ?concern WHERE {"
                    + "<http://www.semanticweb.org/sa#" + id + "> <http://www.semanticweb.org/sa#havaAsTrigger> ?d . "
                    + "?d <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/sa#Concern> . "
                    + "?d <http://www.semanticweb.org/sa#id> ?id . "
                    + "?d <http://www.semanticweb.org/sa#concern> ?concern "
                    + "}"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                BindingSet bs = result.next();
                concerns.add(
                        new Concern(
                                bs.getValue("id").stringValue(),
                                bs.getValue("concern").stringValue()
                        ));
                int i = concerns.size() - 1;
                concerns.get(i).setDescribedByFR(JsonFactory.fromJsonArray(
                        new FunctionalRequerimentServiceImpl().selectFRByConcernId(
                                concerns.get(i).getId(), conn),
                        FunctionalRequeriment.class));
                concerns.get(i).setDescribedByQA(JsonFactory.fromJsonArray(
                        new QualityAttributeServiceImpl().selectQAByConcenrId(
                                concerns.get(i).getId(), conn),
                        QualityAttribute.class));
            }
            if(concerns.isEmpty())
            {
                concerns = null;
            }
        }finally
        {
            if(connection == null)
            {
                conn.close();
            }
        }
        return JsonFactory.toJson(concerns);
    }

    @Override
    public String selectById(String id)
    {
        Concern concern = null;
        Repository repo = OntologyTools.getInstance();
        repo.initialize();
        RepositoryConnection conn = repo.getConnection();
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL,
                    "SELECT DISTINCT ?id ?concern WHERE {\n"
                    + "<http://www.semanticweb.org/sa#" + id + "> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/sa#Concern> . "
                    + "<http://www.semanticweb.org/sa#" + id + "> <http://www.semanticweb.org/sa#id> ?id . "
                    + "<http://www.semanticweb.org/sa#" + id + "> <http://www.semanticweb.org/sa#concern> ?concern "
                    + "}"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                BindingSet bs = result.next();
                concern = new Concern(
                        bs.getValue("id").stringValue(),
                        bs.getValue("concern").stringValue()
                );
                concern.setDescribedByFR(
                        JsonFactory.fromJsonArray(new FunctionalRequerimentServiceImpl().selectFRByConcernId(id,
                                conn),FunctionalRequeriment.class));
                concern.setDescribedByQA(
                        JsonFactory.fromJsonArray(new QualityAttributeServiceImpl().selectQAByConcenrId(id, conn), QualityAttribute.class));
            }
        }finally
        {
            conn.close();
        }
        return JsonFactory.toJson(concern);
    }

    @Override
    public String selectAll()
    {
        List<Concern> concerns = new ArrayList();
        Repository repo = null;
        repo = OntologyTools.getInstance();
        repo.initialize();
        RepositoryConnection conn = repo.getConnection();
        try
        {
            TupleQuery tq = conn.prepareTupleQuery(QueryLanguage.SPARQL,
                    "SELECT DISTINCT ?id ?concern WHERE {"
                    + "?d <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/sa#Concern> . "
                    + "?d <http://www.semanticweb.org/sa#id> ?id . "
                    + "?d <http://www.semanticweb.org/sa#concern> ?concern "
                    + "}"
            );
            TupleQueryResult result = tq.evaluate();
            while(result.hasNext())
            {
                BindingSet bs = result.next();
                concerns.add(
                        new Concern(
                                bs.getValue("id").stringValue(),
                                bs.getValue("concern").stringValue()
                        ));
                int i = concerns.size() - 1;
                concerns.get(i).setDescribedByFR(JsonFactory.fromJsonArray(
                        new FunctionalRequerimentServiceImpl().selectFRByConcernId(
                                concerns.get(i).getId(), conn),
                        FunctionalRequeriment.class));
                concerns.get(i).setDescribedByQA(JsonFactory.fromJsonArray(
                        new QualityAttributeServiceImpl().selectQAByConcenrId(
                                concerns.get(i).getId(), conn),
                        QualityAttribute.class));
            }
            if(concerns.isEmpty())
            {
                concerns = null;
            }
        }finally
        {
            conn.close();
        }
        return JsonFactory.toJson(concerns);
    }
}
