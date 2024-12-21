"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Label } from "@/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { Container } from "@/components/container"
import { Separator } from "@/components/separator"
import { useTheme } from "next-themes"
import { Moon, Settings, Sun } from 'lucide-react'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [defaultVoice, setDefaultVoice] = useState("alloy")
  const [defaultModel, setDefaultModel] = useState("gpt-4")

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Save settings to local storage or backend
  }

  return (
    <Container>
      <h2 className="text-2xl font-bold flex items-center gap-4 mb-4">
        <Settings className="w-6 h-6 text-blue-500" />
        Settings
      </h2>
      <form onSubmit={handleSave} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Appearance</h3>
          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={theme === 'light' ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setTheme('light')}
              >
                <Sun className="w-4 h-4 mr-2" />
                Light
              </Button>
              <Button
                type="button"
                variant={theme === 'dark' ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setTheme('dark')}
              >
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">AI Models</h3>
          <div className="space-y-2">
            <Label htmlFor="model">Default Chat Model</Label>
            <Select value={defaultModel} onValueChange={setDefaultModel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="voice">Default Voice</Label>
            <Select value={defaultVoice} onValueChange={setDefaultVoice}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alloy">Alloy</SelectItem>
                <SelectItem value="echo">Echo</SelectItem>
                <SelectItem value="fable">Fable</SelectItem>
                <SelectItem value="onyx">Onyx</SelectItem>
                <SelectItem value="nova">Nova</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Save Settings
        </Button>
      </form>
    </Container>
  )
}

