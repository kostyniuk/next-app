import { BellIcon, ShieldCheckIcon, UserIcon } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Label } from "@/components/ui/label"
import { UiDemo } from "@/components/ui-demo"

const settings = [
  {
    icon: UserIcon,
    title: "Profile",
    description: "Update your name and avatar.",
  },
  {
    icon: BellIcon,
    title: "Notifications",
    description: "Choose what you get notified about.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security",
    description: "Manage passwords and sessions.",
  },
]

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col gap-6 p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <CardDescription>
              Enter your details to get started.
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">
                Help
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@example.com" />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Items inside a card.</CardDescription>
          </CardHeader>
          <CardContent>
            <ItemGroup>
              {settings.map((s, i) => (
                <div key={s.title}>
                  <Item>
                    <ItemMedia variant="icon">
                      <s.icon />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{s.title}</ItemTitle>
                      <ItemDescription>{s.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button variant="outline" size="sm">
                        Open
                      </Button>
                    </ItemActions>
                  </Item>
                  {i < settings.length - 1 && <ItemSeparator />}
                </div>
              ))}
            </ItemGroup>
          </CardContent>
        </Card>
      </div>

      <div className="flex max-w-md flex-col gap-3">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Outline item</ItemTitle>
            <ItemDescription>A standalone item.</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>Muted item</ItemTitle>
            <ItemDescription>Another variant.</ItemDescription>
          </ItemContent>
        </Item>
      </div>

      <UiDemo />

      <div className="font-mono text-xs text-muted-foreground">
        (Press <kbd>d</kbd> to toggle dark mode)
      </div>
    </div>
  )
}
