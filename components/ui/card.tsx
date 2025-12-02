'use client'

import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children }: CardProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardTitle({ className = '', children }: CardProps) {
  return <h2 className={`text-xl font-bold text-gray-900 ${className}`}>{children}</h2>
}

export function CardDescription({ className = '', children }: CardProps) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
}

export function CardContent({ className = '', children }: CardProps) {
  return <div className={`${className}`}>{children}</div>
}
