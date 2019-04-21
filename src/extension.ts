import * as vscode from "vscode";
///<reference path="missile.ts"/>
import { missile_html } from "./missile";
///<reference path="rocket.ts"/>
import { rocket_html } from "./rocket";
import {
  workspace,
  languages,
  window,
  commands,
  ExtensionContext,
  Disposable
} from "vscode";
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitPush", () => {
      let terminal = window.createTerminal("git-rocket");
      terminal.sendText('git push',true);
      terminal.show();
      let panel = window.createWebviewPanel(
        "git-rocket",
        "git-rocket",
        vscode.ViewColumn.One,
        {
          enableScripts: true
        }
      );
      panel.webview.html = rocket_html;
      setTimeout(() => {
        panel.dispose();
      }, 15000);
    }),
    vscode.commands.registerCommand("extension.gitPushForce", () => {
      let terminal = window.createTerminal("git-missile");
      vscode.window
        .showInputBox({
          prompt: "Are you sure ? [Yes/No]"
        })
        .then(ans => {
          if (ans === "Yes") {
            terminal.sendText('git push --force',true);
            terminal.show();
            let panel = window.createWebviewPanel(
              "git-rocket",
              "git-rocket",
              vscode.ViewColumn.One,
              {
                enableScripts: true
              }
            );
            panel.webview.html = missile_html;
            setTimeout(() => {
              panel.dispose();
            }, 8000);
          }
        });
    })
  );
}
export function deactivate() {}
