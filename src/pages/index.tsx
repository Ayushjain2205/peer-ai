import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  LayoutDashboard,
  Zap,
  Settings,
  Sun,
  Globe,
  Send,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r hidden md:block">
        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-bold">PeerAI</h1>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-muted-foreground">
              NETWORK
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-sm">Hyperspace Community</span>
              <Switch />
            </div>
            <div className="text-sm space-y-1">
              <div>Public Key: B4V81j...W7dhHy</div>
              <div>
                Points:{" "}
                <span className="bg-secondary text-secondary-foreground px-1.5 rounded">
                  61.44
                </span>
              </div>
            </div>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Playground
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Zap className="mr-2 h-4 w-4" />
              Inferences
            </Button>
          </nav>
        </div>
        <div className="absolute bottom-4 left-4 space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>v0.2.1</span>
            <div className="space-x-2">
              <button>
                <Globe className="h-4 w-4" />
              </button>
              <button>
                <Sun className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className="space-x-2">
            <Button variant="outline">LOCAL</Button>
            <Button variant="outline">PEER</Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 flex flex-col items-center justify-center text-center">
          <div className="border-2 border-dashed border-muted-foreground rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <MessageSquare className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Get started</h3>
          <p className="text-muted-foreground max-w-md">
            Download or select a model from the side panel, then you'll be ready
            to send prompts.
          </p>
        </div>
        <div className="p-4 border-t">
          <div className="relative">
            <Input placeholder="Type your prompt here..." className="pr-10" />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-80 border-l hidden lg:block">
        <div className="p-4 space-y-4">
          <Input placeholder="Type to search models..." />
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">ALL</TabsTrigger>
              <TabsTrigger value="local">LOCAL</TabsTrigger>
              <TabsTrigger value="peer">PEER</TabsTrigger>
              <TabsTrigger value="faved">FAVED</TabsTrigger>
            </TabsList>
          </Tabs>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-4">
              {[
                {
                  name: "bartowski/Meta-Llama-3.1-8B...",
                  size: "8B",
                  type: "LOCAL",
                  seeders: 67,
                  fileSize: "7.95 GB",
                },
                {
                  name: "acon96/Home-3B-v3-GG...",
                  size: "3B",
                  type: "PEER",
                  seeders: 145,
                  fileSize: "4.69 GB",
                },
                {
                  name: "acon96/Home-3B-v3-GG...",
                  size: "3B",
                  type: "PEER",
                  seeders: 45,
                  fileSize: "2.77 GB",
                },
                {
                  name: "afrideva/phi-2-uncensor...",
                  size: "",
                  type: "PEER",
                  seeders: 87,
                  fileSize: "1.67 GB",
                },
                {
                  name: "afrideva/Tiny-Vicuna-1B-...",
                  size: "1B",
                  type: "PEER",
                  seeders: 0,
                  fileSize: "0 GB",
                },
              ].map((model, index) => (
                <div key={index} className="bg-muted p-3 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{model.name}</span>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    {model.size && (
                      <span className="bg-secondary text-secondary-foreground px-1.5 rounded">
                        {model.size}
                      </span>
                    )}
                    <span className="bg-primary text-primary-foreground px-1.5 rounded">
                      {model.type}
                    </span>
                    <span>SEEDERS: {model.seeders}</span>
                    <span>{model.fileSize}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>
    </div>
  );
}
