package net.unipiloto.wiki.domain.entities;

import java.util.List;

public class Responsible
{
    private String id;
    private String name;
    private List<Decision> decisions;

    public Responsible(String id, String name)
    {
        this.id = id;
        this.name = name;
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

    public List<Decision> getDecisions()
    {
        return decisions;
    }

    public void setDecisions(List<Decision> decisions)
    {
        this.decisions = decisions;
    }
    
    
}
