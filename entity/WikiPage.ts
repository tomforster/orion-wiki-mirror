import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class WikiPage
{
    @PrimaryGeneratedColumn()
    id:number;
    
    @CreateDateColumn()
    createdOn:number;
    
    @Column()
    name:string;
    
    @Column()
    content:string;
    
    linkUrls:string[];
    
    exists:boolean = true;
    
    constructor(name:string, content?:string, linkUrls:string[] = [])
    {
        this.name = name;
        this.content = content;
        this.linkUrls = linkUrls;
        if(!this.content) this.exists = false;
    }
}