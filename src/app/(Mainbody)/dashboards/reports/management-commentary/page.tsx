"use client"


import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Users, Shield, BarChart, FileText } from "lucide-react"

interface Executive {
  name: string
  position: string
  image: string
  bio: string
}

const executives: Executive[] = [
  {
    name: "John Doe",
    position: "Chief Executive Officer",
    image: "/placeholder.svg?height=100&width=100",
    bio: "John Doe has over 20 years of experience in the technology industry, leading companies through periods of rapid growth and innovation."
  },
  {
    name: "Jane Smith",
    position: "Chief Financial Officer",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Jane Smith is a seasoned financial expert with a track record of optimizing financial operations and driving strategic growth initiatives."
  },
  {
    name: "Mike Johnson",
    position: "Chief Operating Officer",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Mike Johnson brings extensive operational expertise, focusing on streamlining processes and improving overall company efficiency."
  },
  {
    name: "Sarah Brown",
    position: "Chief Technology Officer",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Sarah Brown is a technology visionary, spearheading our company's digital transformation and innovation efforts."
  }
]

export default function ManagementCommentary() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Management Commentary & Corporate Governance</h1>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="executives">Key Executives</TabsTrigger>
          <TabsTrigger value="governance">Governance Practices</TabsTrigger>
          <TabsTrigger value="reports">Reports & Disclosures</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
              <CardDescription>Key information about our management and governance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our company is committed to maintaining the highest standards of corporate governance and ethical business practices. We believe that strong leadership, transparency, and accountability are essential to creating long-term value for our shareholders and stakeholders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Board Members: 9</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Independent Directors: 7</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Committees: Audit, Compensation, Nominating</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Annual Governance Review</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="executives">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executives.map((exec) => (
              <Card key={exec.name} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedExecutive(exec)}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={exec.image} alt={exec.name} />
                    <AvatarFallback>{exec.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{exec.name}</CardTitle>
                    <CardDescription>{exec.position}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          {selectedExecutive && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>{selectedExecutive.name}</CardTitle>
                <CardDescription>{selectedExecutive.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{selectedExecutive.bio}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="governance">
          <Card>
            <CardHeader>
              <CardTitle>Corporate Governance Practices</CardTitle>
              <CardDescription>Our commitment to ethical business conduct</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Board Structure and Independence</AccordionTrigger>
                  <AccordionContent>
                    Our Board of Directors consists of 9 members, with 7 independent directors. This structure ensures objective oversight and decision-making aligned with shareholder interests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Committee Composition</AccordionTrigger>
                  <AccordionContent>
                    We maintain three primary committees: Audit, Compensation, and Nominating & Governance. Each committee is chaired by an independent director and consists solely of independent board members.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Ethics and Compliance</AccordionTrigger>
                  <AccordionContent>
                    Our company adheres to a strict Code of Business Conduct and Ethics. All employees and directors are required to complete annual ethics training and certify their compliance with our code.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Risk Management</AccordionTrigger>
                  <AccordionContent>
                    We have implemented a comprehensive Enterprise Risk Management (ERM) framework to identify, assess, and mitigate risks across our organization. The Board oversees this process, with specific risk areas delegated to relevant committees.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports and Disclosures</CardTitle>
              <CardDescription>Transparency in our corporate communications</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="font-medium">Annual Report 2023</span>
                  <div>
                    <Badge className="mr-2">New</Badge>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium">Corporate Governance Guidelines</span>
                  <Button variant="outline" size="sm">View</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium">Code of Business Conduct and Ethics</span>
                  <Button variant="outline" size="sm">View</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium">Board Committee Charters</span>
                  <Button variant="outline" size="sm">View</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium">ESG Report 2023</span>
                  <div>
                    <Badge className="mr-2">New</Badge>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
