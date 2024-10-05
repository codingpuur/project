"use client"

import { useState } from 'react'
import { Bell, Moon, Sun, Smartphone } from "lucide-react"

export default function UserPreferences() {
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    push: false,
    sms: false,
  })

  const [displaySettings, setDisplaySettings] = useState({
    theme: 'light',
    fontSize: 'medium',
  })

// @ts-ignore
const handleNotificationChange = (key: keyof typeof notificationPreferences) => {
    setNotificationPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }
  
  // @ts-ignore
  const handleDisplaySettingChange = (key, value) => {
    setDisplaySettings(prev => ({ ...prev, [key]: value }))
  }
  

  return (
    <div className="card w-100 mx-auto">
      <div className="card-header">
        <h5 className="card-title">User Preferences</h5>
        <p className="card-text">Manage your notification and display settings</p>
      </div>
      <div className="card-body">
        <ul className="nav nav-tabs" id="preferencesTab" role="tablist">
          <li className="nav-item">
            <button className="nav-link active" id="notifications-tab" data-bs-toggle="tab" data-bs-target="#notifications" type="button" role="tab">Notifications</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="display-tab" data-bs-toggle="tab" data-bs-target="#display" type="button" role="tab">Display</button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="notifications" role="tabpanel">
            <div className="my-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Bell className="me-2" />
                  <label htmlFor="email-notifications">Email Notifications</label>
                </div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="email-notifications"
                  checked={notificationPreferences.email}
                  onChange={() => handleNotificationChange('email')}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex align-items-center">
                  <Smartphone className="me-2" />
                  <label htmlFor="push-notifications">Push Notifications</label>
                </div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="push-notifications"
                  checked={notificationPreferences.push}
                  onChange={() => handleNotificationChange('push')}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex align-items-center">
                  <Smartphone className="me-2" />
                  <label htmlFor="sms-notifications">SMS Notifications</label>
                </div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="sms-notifications"
                  checked={notificationPreferences.sms}
                  onChange={() => handleNotificationChange('sms')}
                />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="display" role="tabpanel">
            <div className="my-3">
              <label>Theme</label>
              <div className="mt-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="theme"
                    id="theme-light"
                    value="light"
                    checked={displaySettings.theme === 'light'}
                    onChange={(e) => handleDisplaySettingChange('theme', e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="theme-light">
                    <Sun className="me-1" /> Light
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="theme"
                    id="theme-dark"
                    value="dark"
                    checked={displaySettings.theme === 'dark'}
                    onChange={(e) => handleDisplaySettingChange('theme', e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="theme-dark">
                    <Moon className="me-1" /> Dark
                  </label>
                </div>
              </div>
            </div>
            <div className="my-3">
              <label>Font Size</label>
              <div className="mt-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="fontSize"
                    id="font-small"
                    value="small"
                    checked={displaySettings.fontSize === 'small'}
                    onChange={(e) => handleDisplaySettingChange('fontSize', e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="font-small">Small</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="fontSize"
                    id="font-medium"
                    value="medium"
                    checked={displaySettings.fontSize === 'medium'}
                    onChange={(e) => handleDisplaySettingChange('fontSize', e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="font-medium">Medium</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="fontSize"
                    id="font-large"
                    value="large"
                    checked={displaySettings.fontSize === 'large'}
                    onChange={(e) => handleDisplaySettingChange('fontSize', e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="font-large">Large</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary w-100 mt-3">Save Preferences</button>
      </div>
    </div>
  )
}
