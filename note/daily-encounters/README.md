[![見出し画像](https://assets.st-note.com/production/uploads/images/191019813/rectangle_large_type_2_0b4e39c86bbb7bc5a50385b9b1186f23.png?width=1200)](https://assets.st-note.com/production/uploads/images/191019813/rectangle_large_type_2_0b4e39c86bbb7bc5a50385b9b1186f23.png?width=2000&height=2000&fit=bounds&quality=85) 

# 【Dify】暇つぶしアプリを作る！まずは試してみたい初心者向けにかんたん解説

[![7番劇場](https://assets.st-note.com/production/uploads/images/188936186/profile_a5874f3ecb89cd5b3b42b6f2d7d417d5.jpeg?width=60)](https://note.com/theater_no7)

[7番劇場](https://note.com/theater_no7)

【[note記事はこちら](https://note.com/theater_no7/n/n6de73a384162)】

「Difyで暇つぶしをしたい」  
「ひとまずDifyで遊んでみたい」  
そんな方向けにDifyを使ってかんたんに作成できる暇つぶしアプリを作ってみました。  
今回のテーマは「**今日の敵**」です。

> 実用性等は一切考えておりませんので、どうかネタとしてお楽しみください！

日々の生活で、ちょっとした「**敵**」に悩まされることはありませんか？  
冷蔵庫の奥で忘れられたタッパーや、絡まるイヤホン、洗濯物に混ざったティッシュ……。  
そんな「**日常の**敵」を楽しく提案してくれるアプリを、AIツール「**Dify**」を使って簡単に作成しました！

この記事では、Difyとは何か、そして今回作成したアプリの概要や作り方を詳しく解説します。

* * *

## Difyとは？

[**Dify**](https://dify.ai/jp)は、ノーコード/ローコードでAIアプリケーションを構築できるプラットフォームです。  
ChatGPTやその他のLLM（大規模言語モデル）を活用して、プロンプト設計やワークフローの構築が可能です。プログラミングの知識がなくても直感的に操作できるため、AIを活用したアプリを素早く開発できます。

今回はGoogleが提供するAI、[**Gemini**](https://gemini.google.com/)を使用しています。  
ご自分でこのアプリを作成される場合は、GeminiのAPIキーを発行し、自分のDifyアカウントに紐づけましょう。  
詳しい開発環境は記事の後半でご紹介します！

* * *

## Difyにおけるワークフローとは

Difyの**ワークフロー**は、アプリケーションの動作手順を視覚的に設計できる仕組みです。  
ノード（Node）と呼ばれるパーツを組み合わせることで、以下のような処理を簡単に実現できます。

-   ユーザーからの入力を受け取る
    
-   Pythonコードを実行する
    
-   ChatGPTなどのLLMを呼び出す
    
-   処理結果を出力する
    

これらを組み合わせることで、複雑なアプリケーションも簡単に構築可能です。

* * *

## 今回作成するアプリの概要

## 今日の敵を提案してくれるアプリ

今回作成したアプリは、**「今日倒すべき敵」を提案してくれるアプリ**です。  
ユーザーが「今日倒したい敵の数」を入力すると、事前に用意された300件の「敵リスト」からランダムに選定し、その敵を倒すべき理由や状況を解説してくれます。

例えば、以下のような結果が得られます。

### 出力例

実際はマークダウン記法で出力されます！

    # 👾今日のあなたの敵  
    冷蔵庫の奥に潜む謎のタッパー  
    
    ## 理由  
    冷蔵庫の奥で長い間放置されたタッパーは、開けるのが恐ろしくなる存在。今日こそ勇気を出して対峙しましょう！

copy

* * *

## アプリの完成系

先にアプリの全体図をお見せすると、４つのノードがストレートにつながっているだけのシンプルな構造です。

[![画像](https://assets.st-note.com/img/1747664659-JN5Pwp2Z8vhzWseEdAiDyg0M.png?width=1200)](https://assets.st-note.com/img/1747664659-JN5Pwp2Z8vhzWseEdAiDyg0M.png?width=2000&height=2000&fit=bounds&quality=85)

アプリの全体図

完成したアプリは、以下のような動作をします。

1.  ユーザーが「今日倒したい敵の数」を入力。
    
2.  アプリがランダムに敵を選び、理由や状況を解説。
    
3.  出力結果を画面に表示。
    

[![画像](https://assets.st-note.com/img/1747664122-dFJlKe2pzjnGaT58bQUXgMYO.png?width=1200)](https://assets.st-note.com/img/1747664122-dFJlKe2pzjnGaT58bQUXgMYO.png?width=2000&height=2000&fit=bounds&quality=85)

今日倒したい敵の数を入力

[![画像](https://assets.st-note.com/img/1747664266-qtaZOQITVELhvRX6lreiPKMj.png?width=1200)](https://assets.st-note.com/img/1747664266-qtaZOQITVELhvRX6lreiPKMj.png?width=2000&height=2000&fit=bounds&quality=85)

出力結果が右に表示される

* * *

## アプリの作り方

## ワークフローの順番と解説

アプリを作成するために、Difyのワークフローを以下のように構築しました。各ノードの役割を順番に解説します。

### １．開始ノード

**役割**: ユーザーに「今日倒したい敵の数」を入力してもらいます。  
このノードで入力された数値は、後続のノードで使用するために変数に格納されます。

今回は「今日倒したい敵の数」を「how\_many\_enemies」という変数に格納するようにしました。  
この変数の種類は「数値」を選択しています。

[![画像](https://assets.st-note.com/img/1747664532-nSBkpaPdtm3CLQwUhelrR9IG.png?width=1200)](https://assets.st-note.com/img/1747664532-nSBkpaPdtm3CLQwUhelrR9IG.png?width=2000&height=2000&fit=bounds&quality=85)

* * *

### ２．コード実行ノード

**役割**: Pythonコードを実行し、300件の「敵リスト」からランダムに指定された数だけ選定します。

**＜使用したPythonコードの例＞**

    import random
    import json
    
    def main(how_many_enemies: int) -> dict:
        """
        前のノードから how_many_enemies の値を受け取り、
        リストからランダムに指定された数のテキストを抽出します。
        """
        enemy_list = [
            "冷蔵庫の奥に潜む謎のタッパー",
            "靴下の片方だけ消える現象",
            # ...（省略）...
            "カバンの中で破れた古いポーチ"
        ]
    
        # リストからランダムに how_many_enemies 個の要素を抽出 (重複なし)
        if how_many_enemies > len(enemy_list):
            selected_enemies = random.sample(enemy_list, len(enemy_list))
        else:
            selected_enemies = random.sample(enemy_list, how_many_enemies)
    
        # 結果を outputs に格納 (リストとして)
        return {"selected_enemies": selected_enemies}

copy

このノードでは、ランダム性を確保するためにPythonの\`random.sample()\`を使用しています。

> プログラミングのことはさっぱりわからないのですが、AIにコードを書かせる→エラーならエラーメッセージをAIに読ませる→AIのコードを書かせる…と繰り返していけばなんとなります。  
> テクノロジーってすごいですね。

出力は"selected\_enemies"という変数に格納しています。  
  
また、今回の場合出力変数が複数になる場合があります（ユーザー入力が2以上の数値のとき）。  
すると出力変数も複数になるため、出力変数の型を「**Array**」型にすることで、**Pythonがこの変数をリストとして受け取ることができる**ようです。

[![画像](https://assets.st-note.com/img/1747700501-qYJoIOR5wLm1k3stKZyNeMEP.png?width=1200)](https://assets.st-note.com/img/1747700501-qYJoIOR5wLm1k3stKZyNeMEP.png?width=2000&height=2000&fit=bounds&quality=85)

* * *

### ３．LLMノード

**役割**: 選定された敵について、倒すべき理由や状況を解説します。  
そもそもコード実行の時点で理由まで入れてしまえば確実なのですが、あえて理由はその都度考えてもらうということで…

**＜プロンプトの例＞**

    以下の敵を、今日の敵として提案してください：
    # 倒したい敵
    {{コード実行ノードの出力変数}}
    
    必ず{{開始ノードの入力変数}}つだけ提案して，理由を添えてください。それ以外の候補や説明は不要です。
    
    リストの中から選ぶ順番や内容は毎回異なるようにしてください。
    
    以下のフォーマットで答えてください：
    # 👾今日のあなたの敵
    （敵の名前）
    ## 理由
    （なぜそれが敵なのか。敵らしい特徴や状況を説明してください。）
    

copy

LLMノードを使用することで、提案された敵に対するユニークな解説を生成できます。  
プロンプトの中には、LLMノードより前に登場した、開始ノードの入力変数"how\_many\_enemies"とコード実行ノードの出力変数"selected\_enemies"を含んでください。

[![画像](https://assets.st-note.com/img/1747701534-ZVxYWa6JHNizgkoBDLFe1uwC.png?width=1200)](https://assets.st-note.com/img/1747701534-ZVxYWa6JHNizgkoBDLFe1uwC.png?width=2000&height=2000&fit=bounds&quality=85)

* * *

### ４．終了ノード

**役割**: LLMノードで生成された結果を出力します。

ユーザーはここで最終的な結果を確認できます。  
終了ノードの「出力変数」にLLMノードの出力を割り当てればOKです。

[![画像](https://assets.st-note.com/img/1747701785-nPiJ7tymoTXqcACrU6GMVEeb.png?width=1200)](https://assets.st-note.com/img/1747701785-nPiJ7tymoTXqcACrU6GMVEeb.png?width=2000&height=2000&fit=bounds&quality=85)

* * *

## 実際に遊んでみる

アプリを実行すると、毎回異なる「敵」が提案されます。  
「冷蔵庫の奥に潜む謎のタッパー」や「靴下の片方だけ消える現象」など、日常の些細な問題を楽しく解決するきっかけになるかもしれません。

もちろん、本当に戦う必要はありませんので！

[![画像](https://assets.st-note.com/img/1747701877-5wSQ2r7eO1AC8yK6lcgoUNiT.png?width=1200)](https://assets.st-note.com/img/1747701877-5wSQ2r7eO1AC8yK6lcgoUNiT.png?width=2000&height=2000&fit=bounds&quality=85)

* * *

## 今回の開発環境

-   **プラットフォーム**:：Dify コミュニティ版
    
-   **OS**：Macbook Pro M4
    
-   **使用したAI**：Gemini 1.5 flash latest
    

* * *

## まとめ

Difyを使えば、日常の小さなアイデアを簡単にアプリ化できます。  
今回の「今日倒すべき敵を提案するアプリ」は、300件の敵リストをランダムに選びながら、AIがユニークな解説を加える仕組みになっています。

ぜひ皆さんもDifyを使って、自分だけのオリジナルアプリを作ってみてください！

今後もDifyでアプリを作成していきます！  
慣れてきたら実用性のあるものも作っていきたいので、そのうちGithubで公開できたらなぁという気持ちです。  
まずは色々やってみて、慣れていけたらと思います！