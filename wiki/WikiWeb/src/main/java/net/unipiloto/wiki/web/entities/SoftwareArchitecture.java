package net.unipiloto.wiki.web.entities;

import java.util.List;

public class SoftwareArchitecture
{
    private String id;
    private String name;
    private String description;
    private List<Artifact> relatedArtifacts;
    private List<Decision> decisionsRelated;
    
    public SoftwareArchitecture(String id, String name, String description)
    {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public List<Decision> getDecisionsRelated()
    {
        return decisionsRelated;
    }

    public void setDecisionsRelated(List<Decision> decisionsRelated)
    {
        this.decisionsRelated = decisionsRelated;
    }

    public List<Artifact> getRelatedArtifacts()
    {
        return relatedArtifacts;
    }

    public void setRelatedArtifacts(List<Artifact> relatedArtifacts)
    {
        this.relatedArtifacts = relatedArtifacts;
    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }
    
     
}
