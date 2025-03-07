"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

interface FileUploadProps {
  id: string
  accept?: string
  description?: string
  onFileSelected: (file: File) => void
}

export function FileUpload({ id, accept, description, onFileSelected }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileSelected(file)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => document.getElementById(id)?.click()}
          className="cursor-pointer"
        >
          <Upload className="mr-2 h-4 w-4" />
          Yükle
        </Button>
        <input id={id} type="file" accept={accept} className="hidden" onChange={handleFileChange} />
        {fileName ? (
          <span className="text-sm">{fileName}</span>
        ) : (
          <span className="text-sm text-muted-foreground">Dosya seçilmedi</span>
        )}
      </div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

