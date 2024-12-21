"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Download, Share2, Music2 } from "lucide-react";
import { Container } from "@/components/container";

export default function AudioGeneratorPage() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("alloy");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateAudio = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice }),
      });
      if (!response.ok) {
        throw new Error("Failed to generate audio.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error generating audio:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold flex items-center gap-4">
            <Music2 className="w-6 h-6 text-blue-500" />
            Audio Generation
          </h2>
          {audioUrl && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          )}
        </div>

        {/* Form Section */}
        <form onSubmit={generateAudio} className="space-y-6">
          {/* Voice Selection */}
          <div className="space-y-2">
            <Label htmlFor="voice">Select Voice</Label>
            <Select value={voice} onValueChange={setVoice}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a voice" />
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

          {/* Text Input */}
          <div className="space-y-2">
            <Label htmlFor="text">Enter Text</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type the text you want to convert to audio..."
              className="h-40 resize-none"
            />
          </div>

          {/* Generate Button */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Generating Audio..." : "Generate Audio"}
          </Button>
        </form>

        {/* Audio Playback Section */}
        {audioUrl && (
          <div className="mt-6">
            <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </Container>
  );
}
