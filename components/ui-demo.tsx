import { InfoIcon } from "@phosphor-icons/react/dist/ssr"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Demo({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
    </Card>
  )
}

export function UiDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <Demo title="Spinner">
        <div className="flex items-center gap-4">
          <Spinner />
          <Spinner className="size-6" />
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving…
          </Button>
        </div>
      </Demo>

      <Demo title="Badge">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Demo>

      <Demo title="Switch & Checkbox">
        <div className="flex items-center gap-2">
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane mode</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms</Label>
        </div>
      </Demo>

      <Demo title="Textarea">
        <div className="flex flex-col gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
      </Demo>

      <Demo title="Select">
        <Select defaultValue="next">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
            <SelectItem value="astro">Astro</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <Demo title="Slider & Progress">
        <Slider defaultValue={[40]} max={100} />
        <Progress value={60} />
      </Demo>

      <Demo title="Skeleton">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </Demo>

      <Demo title="Avatar">
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </Demo>

      <Demo title="Tooltip">
        <div>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Hover me
            </TooltipTrigger>
            <TooltipContent>Helpful hint</TooltipContent>
          </Tooltip>
        </div>
      </Demo>

      <Demo title="Alert">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            You can add components with the shadcn CLI.
          </AlertDescription>
        </Alert>
      </Demo>

      <div className="md:col-span-2 xl:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Switch between views.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account settings.</TabsContent>
              <TabsContent value="password">Password settings.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
