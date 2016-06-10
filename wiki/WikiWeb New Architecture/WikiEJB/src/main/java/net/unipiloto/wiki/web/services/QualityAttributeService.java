package net.unipiloto.wiki.web.services;

import javax.ejb.Remote;
import org.openrdf.repository.RepositoryConnection;

@Remote
public interface QualityAttributeService 
{
    public String selectQAByConcenrId(String id, RepositoryConnection connection);
    public String selectById(String id);
    public String selectAll();
}
