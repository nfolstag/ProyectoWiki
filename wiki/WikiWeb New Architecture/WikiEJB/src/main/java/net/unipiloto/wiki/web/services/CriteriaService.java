package net.unipiloto.wiki.web.services;

import javax.ejb.Remote;
import org.openrdf.repository.RepositoryConnection;

@Remote
public interface CriteriaService 
{
    public String selectAllCriteriasByDecisionId(String id, RepositoryConnection connection);
    public String selectById(String id);
    public String selectAll();
}
