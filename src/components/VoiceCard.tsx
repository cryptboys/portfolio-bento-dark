"use client";

import { useRef, useState, useEffect } from "react";
import { Mic, Square } from "lucide-react";

export function VoiceCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const data = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      if (!isRecording) return;
      analyser.getByteFrequencyData(data);
      ctx.clearRect(0, 0, width, height);

      const barWidth = width / data.length;
      for (let i = 0; i < data.length; i++) {
        const barHeight = (data[i] / 255) * height;
        ctx.fillStyle = "#C6FF00";
        ctx.fillRect(i * barWidth, height - barHeight, barWidth - 1, barHeight);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioCtx();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;
      setIsRecording(true);
      drawWaveform();
    } catch (err) {
      console.error("Mic access denied:", err);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }

    // TTS on stop
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        "Hello from Herman's voice agent"
      );
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="flex h-full flex-col gap-4">
      <p className="mono-label">Voice Agent</p>

      <canvas
        ref={canvasRef}
        width={300}
        height={60}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03]"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            isRecording
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              : "bg-accent text-black hover:opacity-90"
          }`}
        >
          {isRecording ? (
            <>
              <Square className="h-4 w-4" />
              Stop
            </>
          ) : (
            <>
              <Mic className="h-4 w-4" />
              Start Mic
            </>
          )}
        </button>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {isRecording ? "Listening..." : "Tap to demo voice"}
        </p>
      </div>
    </div>
  );
}