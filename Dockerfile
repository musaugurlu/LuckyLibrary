FROM openjdk:11-jre-slim
COPY ./target/LuckyLibrary.war /usr/src/luckylibrary/
WORKDIR /usr/src/luckylibrary
EXPOSE 8090
CMD ["java", "-jar", "LuckyLibrary.war"]