# 以下の通知をyaml形式にします
* [運用Tips] EC2やRDSのメンテナンス通知をSlackに連携する ( http://blog.serverworks.co.jp/tech/2019/02/08/cloudwatch-events-health/ )

変更前： CloudWatchイベント → SNSトピック発行(Eメール )
変更後： CloudWatchイベント → SNSトピック発行(Lambda) → SNSトピック発行(Eメール)

# 前提
* js-yaml ( https://github.com/nodeca/js-yaml ) をLambdaから呼べるようにしてください
