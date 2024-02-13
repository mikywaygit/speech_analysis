MongoDB

Version Installed: 4.4.28
Installation Commands:

sh

sudo apt-get install -y mongodb-org

Summary: MongoDB is a NoSQL document database known for its scalability and flexibility. You've installed version 4.4.28, which is designed to handle large amounts of data and complex queries.
Elasticsearch

Version Installed: 8.12.0 (desired version)
Installation Commands:

sh

wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
sudo apt-get update && sudo apt-get install elasticsearch

Summary: Elasticsearch is a distributed search and analytics engine. It's core to the Graylog stack, providing search capabilities and data indexing.
Graylog

Version Installed: 4.2 (as per the repository package)
Installation Commands:

sh

wget https://packages.graylog2.org/repo/packages/graylog-4.2-repository_latest.deb
sudo dpkg -i graylog-4.2-repository_latest.deb
sudo apt-get update && sudo apt-get install graylog-server

Summary: Graylog is a log management and analysis tool for aggregating and analyzing large amounts of machine and system logs. The version you were working on installing is 4.2.
Java

Version Installed: OpenJDK 11 (required by Elasticsearch and Graylog)
Installation Commands:

sh

sudo apt install openjdk-11-jre-headless

Summary: Java is a programming language and computing platform. OpenJDK 11 is the open-source implementation of the Java Platform, Standard Edition, and is required to run Elasticsearch and Graylog.
Additional Settings

ulimit and sysctl settings:

sh

echo "* - nofile 65535" | sudo tee -a /etc/security/limits.conf
sudo sysctl -p

Summary: These settings are used to adjust the limits on system resources for processes, which is particularly important for services like Elasticsearch that can require a large number of open files.