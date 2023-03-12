import React from "react";
import { inspect } from "util";
import os from "os";

const getProcess = () => {
  return [
    {
      name: "process.version",
      value: process.version,
      href: "https://nodejs.org/api/process.html#processversion",
    },
    {
      name: "process.versions",
      value: process.versions,
      href: "https://nodejs.org/api/process.html#processversions",
    },
    {
      name: "process.arch",
      value: process.arch,
      href: "https://nodejs.org/api/process.html#processarch",
    },
    {
      name: "process.platform",
      value: process.platform,
      href: "https://nodejs.org/api/process.html#processplatform",
    },
    {
      name: "process.env",
      value: process.env,
      href: "https://nodejs.org/api/process.html#processenv",
    },
    {
      name: "process.cwd()",
      value: process.cwd(),
      href: "https://nodejs.org/api/process.html#processcwd",
    },
    {
      name: "process.memoryUsage()",
      value: process.memoryUsage(),
      href: "https://nodejs.org/api/process.html#processmemoryusage",
    },
    {
      name: "os.oscpus",
      value: os.cpus(),
      href: "https://nodejs.org/api/os.html#oscpus",
    },
    {
      name: "os.userInfo",
      value: os.userInfo(),
      href: "https://nodejs.org/api/os.html#osuserinfooptions",
    },
    {
      name: "os.hostname",
      value: os.hostname(),
      href: "https://nodejs.org/api/os.html#oshostname",
    },
    {
      name: "os.networkInterfaces",
      value: os.networkInterfaces(),
      href: "https://nodejs.org/api/os.html#osnetworkinterfaces",
    },
  ];
};

export const ServerData = ({ className }: { className?: string }) => {
  const data = getProcess();

  const items = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, value, href }) => {
      return (
        <React.Fragment key={name}>
          <div>
            <p>
              <a href={href} target="_blank" style={{ color: "#00abab" }}>
                {name}
              </a>
              <span>: {inspect(value)}</span>
            </p>
          </div>
        </React.Fragment>
      );
    });

  return (
    <div
      className={className}
      style={{
        color: "#fff",
        background: "rgb(8 8 8 / 95%)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        padding: "16px",
        zIndex: 999999,
        display: "block",
        overflow: "auto",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
      }}
    >
      {items}
    </div>
  );
};
